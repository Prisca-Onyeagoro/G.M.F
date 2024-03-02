import Image from 'next/image';

const Card = ({ img, title, percent, amount, investors }) => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-3 text-sm">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2">
          <div className="h-full w-full relative mr-4">
            <Image
              src={img}
              alt={title}
              layout="fill"
              className="object-cover ring-[2px] ring-slate-900 rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-1">
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-gray-500">
            <span className="text-green-500">{percent}%</span>{' '}
            <span className="text-xs">in 5 months</span>
          </p>
          <p className="text-gray-800 font-semibold text-black">
            Amount: {amount} NGN
          </p>
          <p className="text-gray-500">Investors: {investors}</p>
          <button className="text-green-500 self-end rounded-full border-2 border-green-500 py-1 px-2">
            Available
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
