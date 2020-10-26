
export function consoleLogIfDev(message:any){
  if(__DEV__){ console.log(message) }
}
export function consoleErrorIfDev(message:any){
  if(__DEV__){ console.error(message) }
}