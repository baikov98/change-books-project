import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import ButtonItem from "../../atoms/ButtonItem";
import { useSelector, useDispatch } from "react-redux";
import { IRegFields } from "../../../store/models/regFields";
import { IPerosnalData } from "../../../store/models/user";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import {
  getMainInput,
  getAdressInput,
  getUser,
} from "../../../store/selectors";

const PersonalData: React.FC = () => {
  const classes = useStyles();
  const mainInput = useSelector(getMainInput);
  const adressInput = useSelector(getAdressInput);
  const personalData: IPerosnalData = useSelector(getUser);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    setValue,
    formState,
  } = useForm<IPerosnalData>({
    mode: "onChange",
    resolver: yupResolver(VALIDATION.PERSONAL_DATA),
  });
  const { isDirty: isFormEdited, isValid: isNoErrors } = formState;

  const submit = (data: IPerosnalData) => {
    if (data) {
      dispatch.user.patchUser(data);
    }
  };

  const checkDisabled = () => {
    return !isFormEdited || !isNoErrors;
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Личные данные</Typography>
      <Typography className={classes.subtitle}>Основная информация</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <Box className={classes.inputRow}>
          {mainInput.map(
            (
              { name, required, placeholder, label, type, error }: IRegFields,
              index: number
            ) => {
              if (type !== "password") {
                return (
                  <Controller
                    key={`input-${index}`}
                    name={name}
                    control={control}
                    rules={{ required: required }}
                    defaultValue={personalData[name] || ""}
                    render={(props) => (
                      <InputItem
                        label={label}
                        inputType={type}
                        error={errors[error]?.message}
                        placeholder={placeholder}
                        clearClick={() => setValue(name, "")}
                        {...props}
                      />
                    )}
                  />
                );
              } else {
                return null;
              }
            }
          )}
        </Box>

        <Typography className={classes.subtitle}>Адрес</Typography>
        <Box className={classes.inputRow}>
          {adressInput.map(
            (
              { name, required, placeholder, label, type, error }: IRegFields,
              index: number
            ) => (
              <Controller
                key={`input-adress-${index}`}
                name={name}
                control={control}
                rules={{ required: required }}
                defaultValue={personalData[name] || ""}
                render={(props) => (
                  <InputItem
                    label={label}
                    inputType={type}
                    error={errors[error]?.message}
                    placeholder={placeholder}
                    clearClick={() => setValue(name, "")}
                    {...props}
                  />
                )}
              />
            )
          )}
        </Box>
        <ButtonItem
          btnType="submit"
          size="large"
          type={checkDisabled() ? "disabled" : "solid"}
          disabled={checkDisabled()}
          btnClassName={classes.btn}
        >
          Сохранить изменения
        </ButtonItem>
      </form>
    </Box>
  );
};

export default PersonalData;
