import jobs from "./../../public/assets/jobs.json";

const JobListHeader: React.FC = () => {
  const results: number = jobs.job_postings.length;

  return (
    <div className="flex flex-wrap justify-between items-center w-4/5 pt-16 pl-24">
      <div>
        <p className="font-extrabold text-3xl">Opportunities</p>
        <span>Showing {results} results</span>
      </div>
      <div className="">
        <label htmlFor="sort" className="p-0 m-0">
          Sort by:
        </label>
        <select id="sort">
          <option value="imp">Most Relevant</option>
          <option value="ord">Letter</option>
        </select>
      </div>
    </div>
  );
};

export default JobListHeader;
