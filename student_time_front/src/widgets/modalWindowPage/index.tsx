import React, { ReactElement, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import style from "./modalWindowPage.module.scss"

type modalWindowType = {
  visible: boolean,
  title: string,
  content: ReactElement | string,
  footer: ReactElement | string,
  onClose: () => void,
  time: boolean,
}

export const ModalWindowPage = (props: modalWindowType) => {
  const { visible = false, title = '', content = '', footer = '', onClose, time = false} = props;
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  if (!visible) return null


  if (time) {
    setTimeout(() => {
      onClose();
    }, 3000)
  }
  

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modal_dialog} onClick={e => e.stopPropagation()}>
        <div className={style.modal_header}>
          <h3 className={style.modal_title}>{title}</h3>
          <span className={style.modal_close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={style.modal_body}>
          <div className={style.modal_content}>{content}</div>
        </div>
        {footer && <div className={style.modal_footer}>{footer}</div>}
      </div>
    </div>
  )
}