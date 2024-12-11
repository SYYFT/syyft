import Link from 'next/link'
import clsx from 'clsx'

type ButtonLinkProps = {
  invert?: boolean
} & React.ComponentPropsWithoutRef<typeof Link>

type ButtonButtonProps = {
  invert?: boolean
} & React.ComponentPropsWithoutRef<'button'>

type ButtonProps = ButtonLinkProps | ButtonButtonProps

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if ('href' in props) {
    return (
      <Link className={className} {...(props as ButtonLinkProps)}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" className={className} {...(props as ButtonButtonProps)}>
      {inner}
    </button>
  )
}
