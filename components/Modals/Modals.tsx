import { toast } from "nextjs-toast-notify";


export const showErrorToast = (message:string) => {
  toast.error(message, { duration: 5000,
    position:'top-center',
    progress:true,
    sound:true,
    transition:'popUp'
   });
};


export const showSuccessToast = (message:string) => {
  toast.success(message, { duration: 5000,
    position:'top-center',
    progress:true,
    sound:true,
    transition:'popUp'});
};
