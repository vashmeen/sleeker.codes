export default (props) => {

  return (
    <div className="max-w:page bg:gray2">
      <section >
        <h1>This is a demo page</h1>
      </section>
      <section>
        <h2>Here are some cards</h2>
        <ul className="grid:cards gap:l">
          <li className='pd:xl bg:grass3 tx:blue12 rd:l'>a Card</li>
          <li className='pd:xl bg:grass6 tx:blue12 rd:s'>a Card</li>
          <li className='pd:xl bg:grass8 tx:blue12 theme:dark'>a Card</li>
          <li className='pd:l bg:blue12 tx:blue1 shd:l rd:l'>a Card</li>
        </ul>
        <ul className="[grid:cards NO TAILWIND EQUIVALENT] gap-lg">
          <li className='pd-xl bg-grass-300 text-blue-900 rounded-lg'>a Card</li>
          <li className='pd-xl bg-grass-600 text-blue-12 rounded-sm'>a Card</li>
          <li className='pd-xl bg-grass-800 text-blue-12'>a Card</li>
          <li className='pd-lg bg-blue-900 text-blue-10 shadow-lg rounded-lg'>a Card</li>
        </ul>
      </section>
    </div>
  )
};
