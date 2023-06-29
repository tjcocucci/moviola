export default function Selector({ handleChange }: { handleChange: Function }) {
  return (
    <div className="p-2 ">
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="">Order by</option>
        <option value="popularity.desc">Popularity</option>
        <option value="release_date.desc">Release date</option>
      </select>
    </div>
  );
}
