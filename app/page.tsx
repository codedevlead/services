import Plans from "./components/Plans";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className='md:px-16 py-16 px-8 App'
      style={{
        background: "radial-gradient(circle, rgba(240,240,245,1) 9%, rgba(220,233,236,1) 62%, rgba(227,213,241,0.999964951801033) 94%)"
      }}
    >
      <header>
        <div className='pb-8 text-center'>
          <h1 className='text-center text-5xl font-bold text-slate-600 mb-4'>Plans</h1>
          <Link href='/#discounts' className=' font-bold text-lg italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500'>See our discounts</Link>
        </div>
      </header>
      <Plans />
      <section id='discounts' className='pt-12'>
        <p className='text-2xl font-semibold text-slate-900 text-center'>10% off on monthly services/plans contracted for 12 months and paid in full at the start of the contract.</p>
      </section>
    </div>
  );
}
