import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import CheckboxImage from '../../../assets/svg/checkbox.svg'

export const useStyles = makeStyles({
    root:{
        padding: 0,
        margin: 0,
        alignItems: 'flex-start',
    },
    wrapper: {

    },
    error: {
        color: Colors.red,
        fontSize: 12,
        fontWeight: 500,
        marginLeft: 8,
    },
    label: {
        padding: '0 12px',
    },
    checkbox:{
        margin: 0,
        padding: '4px 0',
        '&:hover': {
            backgroundColor: 'transparent',
          },
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: Colors.orange,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage:`url(${CheckboxImage})`,
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: Colors.orange,
        },
      },
      link:{
        textDecoration: 'none',
        color:Colors.blue,
        '&:hover': {
          textDecoration: 'underline',
        }
      },
   
}, {index: 1})