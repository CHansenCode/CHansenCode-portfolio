export const Details = ({ data }) => {
  return (
    <div>
      <h5>{data.company}</h5>
      <h5>{data.title}</h5>
      <h5>{data.location}</h5>
      {data.length &&
        data.tags.map((tag, i) => <h5 key={`${tag}${i}`}>{tag}</h5>)}
      <h5>{data.descr}</h5>
      <h5>{data.from}</h5>
      <h5>{data.to}</h5>
    </div>
  );
};

export default Details;
