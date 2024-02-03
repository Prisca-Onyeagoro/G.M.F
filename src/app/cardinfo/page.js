import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-10">
      <p className="font-bold text-sm text-orange-500 mb-7">
        Securely manage all your debit card connected here. Tap a card for more
        options
      </p>
      <Image
        src="/debit.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <div className="flex justify-center items-center gap-4">
        <Link href={'/cardinput'}>
          <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-80 rounded-full">
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}
