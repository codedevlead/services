import './App.css';
import Plans from './sections/Plans';

function App() {
  return (
    <div
      className='p-16 App'
      style={{
        background: "rgb(240,240,245)",
        background: "radial-gradient(circle, rgba(240,240,245,1) 9%, rgba(220,233,236,1) 62%, rgba(227,213,241,0.999964951801033) 94%)"
      }}
    >
      <header>
        <div className='py-8'>
          <h1 className='text-center text-5xl font-bold text-slate-600 mb-4'>Monthly Plans</h1>
          <a href='#discounts' className=' font-bold text-lg italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500'>See our discounts</a>
        </div>
      </header>
      <Plans />
      <section id='discounts' className='pt-12'>
        <p className='text-2xl font-semibold text-slate-900'>20% off on monthly services/plans contracted for 12 months and paid in full at the start of the contract.</p>
      </section>
    </div>
  );
}

export default App;
