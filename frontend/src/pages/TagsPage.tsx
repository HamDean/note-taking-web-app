import TagMobile from "../components/TagMobile";

const TagsPage = () => {
  return (
    <div className="align-page p-4 lg:hidden">
      <h1 className="text-preset-1 mb-4">Tags</h1>

      <div className="flex flex-col gap-1">
        <TagMobile name="Dev" />
      </div>
    </div>
  )
}
export default TagsPage