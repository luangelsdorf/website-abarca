import Link from 'next/link';
import React from 'react';

export default function Button({
  children,
  link = false,
  type = 'button',
  btnElement = false,
  divElement = false,
  nativeLink = false,
  href = '#',
  className,
  LeftIcon,
  RightIcon,
  ...otherProps
}) {

  const Children = () => (
    <>
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </>
  );

  const baseProps = {
    className: `${link ? '' : 'btn'}${className ? ' ' + className : ''}`,
  };

  if (btnElement) {
    return (
      <button {...baseProps} type={type} {...otherProps}>
        <Children />
      </button>
    )
  }

  else if (divElement) {
    return (
      <div {...baseProps} role="link" {...otherProps}>
        <Children />
      </div>
    )
  }

  else if (nativeLink) {
    return (
      <a {...baseProps} href={href} {...otherProps}>
        <Children />
      </a>
    )
  }

  else {
    return (
      <Link {...baseProps} href={href} {...otherProps}>
        <Children />
      </Link>
    )
  }
}