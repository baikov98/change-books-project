
export const isEmpty = (obj: {}):boolean => {
   if (!obj) return true
   return Object.keys(obj).length === 0;
}
