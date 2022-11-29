import Link from 'next/link';

export default function CategoryItem({
  name,
  thumb,
  desc,
  index,
}: {
  name: string;
  thumb: string;
  desc: string;
  index: number;
}) {
  // console.log(name);
  return (
    <div key={index}>
      {/* <Link href=>
        </Link> */}
      <Link
        href={`categories/${name}`}
        className='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
      >
        <img
          src={thumb}
          alt='category'
          className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
          loading='lazy'
        />
      </Link>
      <div>
        {/* <Link>
          </Link> */}
        <div className='flex items-end gap-2'>
          <span className='text-gray-800 lg:text-lg font-bold'>{name}</span>
        </div>
      </div>
    </div>
  );
}
