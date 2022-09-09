export default () => {

  return (
    <div className='layout:stack'>
      <h1>Sleeker Compacted words</h1>
      <p className="pd:s rd:s bg:gray3">TL:DR; write classes like CSS rules. Replace CSS words below with its compacted version.</p>
      <p>Sleeker tries to keep classes like css rules. but CSS syntax is sometimes too much to fit in class attributes.</p>
      <p>To keep classes short and less ugly, sleeker uses some compact words instead CSS standard names.</p>
      <p>Compact versions are used for more frequently CSS words.</p>
      <p>
        For example, instead of <code>className="background:red"</code> sleeker uses <code>className="bg:red"</code>.
      </p>
      <p>To make it sleeker consistent, and easier to remember, bg is used wherever background word is used.</p>
      <p>For example, instead of <code>className="background-repeat:no-repeat"</code>, use <code>className="bg-repeat:no-repeat"</code>
        There could be multiple compact word in one class. For Example instead of <code>className="background-position:center"</code> use <code>className="bg-pos:center"</code>
      </p>
      <p>
        These compact versions are as compact as possible without hurting readability. For example we didnt use cl for color since it could be confused with column or class.
      </p>

      <h2>List of all Sleeker compact words</h2>
      <table>
        <thead>

          <th>CSS Word</th>
          <th>Compact version</th>
          <th>Example</th>
        </thead>
        <tbody>
          <Trow word='color' compact='clr' example="clr:red" />
          <Trow word='background' compact='bg' example="bg:blue3" />
          <Trow word='border-color' compact='br' example="br:black" />
          <Trow word='border-size' compact='br' example="br:xl" />
          <Trow word='padding' compact='pd' example="pd-bl:xs" />
          <Trow word='margin' compact='mg' example="mg mg-top:xl" />
          <Trow word='border-radius' compact='rd' example="bg:blue3" />
          <Trow word='font-size' compact='fs' example="bg:blue3" />
          <Trow word='font-weight' compact='fw' example="bg:blue3" />
          <Trow word='position' compact='pos' example="pos:sticky" />
          <Trow word='absolute' compact='abs' example="pos:abs" />
          <Trow word='relative' compact='rel' example="pos:rel" />
          <Trow word='display' compact='dsp' example="dsp:bl dsp:flx dsp:grd" />
          <Trow word='direction' compact='dir' example="dir:rtl flx-dir:row" />
          <Trow word='shadow' compact='shd' example="bg:blue3" />
          <Trow word='text' compact='tx' example="tx-align:start" />
          <Trow word='grid-template-columns' compact='tmpl' example="cols:auto" />
          <Trow word='grid-template-rows' compact='tmpl' example="rows:1fr" />
          <Trow word='column' compact='col' example="flx-dir:col" />
          <Trow word='letter-spacing' compact='ltr-sp' example="ltr-sp:xs" />
          <Trow word='width' compact='w' example="w:auto max-w:page" />
          <Trow word='height' compact='h' example="h:100% min-h:100% line-h:1" />

          <Trow word='block' compact='blk' example="dps:blk mg-blk:xs" />
          <Trow word='inline' compact='in' example="mg-in:auto" />
        </tbody>
      </table>
    </div>
  )
}

const Trow = ({ word, compact, example }) => {
  return (
    <tr >
      <td>{word}</td>
      <td>{compact}</td>
      <td>{example}</td>
    </tr>
  )
}