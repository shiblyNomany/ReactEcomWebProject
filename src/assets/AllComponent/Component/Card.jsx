const Card = ({blogInfo}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={blogInfo.image}
            alt="Headphone"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blogInfo.title}</h2>
          <p>{blogInfo.description}</p>
          <h3 className="text-2xl font-bold">$ {blogInfo.price}</h3>
          <h3 className="text-xl font-bold">Stock {blogInfo.rating.count}</h3>
          <h3 className=" font-bold text-base">{blogInfo.rating.rate}</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
