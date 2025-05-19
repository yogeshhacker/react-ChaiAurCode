export default function Card(props) {
  const imgUrl = props.url;
  const title = props.title || "deafult title";
  const price = props.price || "default price";
  const id = props.id || "default id";

  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[15rem] m-5 shadow-lg/100 hover:shadow-blue-500/100">
      <div>
        <img
          src={imgUrl}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold ">{title}</h1>
          <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>#{id}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
