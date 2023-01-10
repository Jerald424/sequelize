import { ToastCxt } from 'contextProvider/ToastContext'
import { useContext } from 'react'

const useToast = () => useContext(ToastCxt);
export default useToast;