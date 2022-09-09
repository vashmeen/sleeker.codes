
const Page = () => {

  return (
    <div className='layout:stack'>
      <h1>Sleeker One-part classes</h1>
      <p className="pd:s rd:s bg:gray3">TL:DR; instead of {`className="pd:md"" just use className="pd"`}</p>
      <p>to make classes shorter we don&apos;t write medium for sizes</p>
      <p>Also there are a few other common classes we made them into one-part-classes</p>
      <h2>List of all One-part classes</h2>
      <table>
        <thead>

          <th>Two part (does not work)</th>
          <th>One part class</th>
          <th>Example</th>
        </thead>
        <tbody>
          <Trow word='pd:md' compact='pd' example="pd" />
          <Trow word='mg-inl:md' compact='mg-inl' example="mg-inl mg-inl-end:xl" />



          <Trow word='d:flex' compact='d:flex' example="mg-inl:auto" />
          <Trow word='d:flex d:flex-dir:col' compact='d:flex-col' example="" />
          <Trow word='dsp:grd' compact='grd' example="" />
        </tbody>
      </table>
    </div>
  )
}

const Trow = ({ word = "", compact = "", example = "" }) => {
  return (
    <tr >
      <td>{word}</td>
      <td>{compact}</td>
      <td>{example}</td>
    </tr>
  )
}

export default Page;
