const Container = ({
  children,
  className
}: {
  children: JSX.Element[] | JSX.Element
  className?: string
}) => {
  return (
    <div
      className={
        'flex justify-center items-center py-8 px-4 ' + className || ''
      }
    >
      {children}
    </div>
  )
}

export default Container
