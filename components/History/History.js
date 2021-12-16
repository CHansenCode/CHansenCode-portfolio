import css from './History.module.scss';

export const History = ({ profile, hover, setHover, jobs }) => {
  return (
    <div className={css.history_wrapper}>
      {jobs.map((job, i) => (
        <JobPost
          key={`history${i}${job.title}`}
          data={job}
          onHover={() => setHover('title')}
        />
      ))}
      <h4>History</h4>
    </div>
  );
};

const JobPost = ({ data }) => {
  return (
    <div className={css.job_post}>
      <h5 className="sc">{data.company}</h5>
      <h5>{data.title}</h5>
      <h6>{data.descr}</h6>
      <h5>{data.from}</h5>
      <h5>{data.to}</h5>
    </div>
  );
};
