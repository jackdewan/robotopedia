export default function Title({ title, emoji }) {
  return (
    <h1 className="text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white">
      <span className="">{title}</span>&nbsp;
      <span role="img" aria-label={title}>
        {emoji}
      </span>
    </h1>
  );
}
