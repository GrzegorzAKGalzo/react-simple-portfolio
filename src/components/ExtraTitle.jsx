function ExtraTitle({ children, color }) {
  return <p className={`extra-title bg-${color}`}>{children}</p>;
}
export default ExtraTitle;
