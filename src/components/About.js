function About() {
  return (
    <>
      <h1 className='heading'>
        <strong >NoteDown - Jot Down Your Notes </strong>
      </h1>
      <div className="container-1">
        <ul className="list" style={{ padding: '16px', fontSize: 'large', margin: '2px' }}>
          <li className="points">Store vehicle owner Name.</li>
          <br />
          <li className="points">Remember your Vehicle Number. </li>
          <br />
          <li className="points">Store your check-in time.</li>
          <br />
          <li className="points">Use it as for Parking Management.</li>
        </ul>
      </div>
    </>
  )
}

export default About