"use client"

import { Button } from "@/components/ui/button"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog"
interface customModalProps {
  title?: string,
  isOpen: boolean,
  onClose: ()=>void,
  children: React.ReactNode,
}
const CustomModal = ({title, isOpen, onClose, children}:customModalProps) => {
  
  return (
    <DialogRoot lazyMount open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
        {children}
        </DialogBody>
        {/* <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onClose}>Close</Button>
          </DialogActionTrigger>
          <Button onClick={confirmOrder}>Proceed</Button>
        </DialogFooter> */}
        <DialogCloseTrigger onClick={onClose}/>
      </DialogContent>
    </DialogRoot>
  )
}


export default CustomModal