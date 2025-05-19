function Nav(props) {
  return (
    <>
      <div className="bg-gray-400 text-white flex flex-col p-1 rounded-lg shadow-lg/100 hover:shadow-blue-500/100 space-y-2 absolute left-0 top-5 ">
        <h5 className="text-black text-bold">BgColor</h5>
        <button onClick={() => props.BgChanger('#fafafa')}>Snow White</button>
        <button onClick={() => props.BgChanger('#d3d3d3')}>Light Gray</button>
        <button onClick={() => props.BgChanger('#f8f8ff')}>Ghost White</button>
        <button onClick={() => props.BgChanger('#e6e6fa')}>Lavender Mist</button>
        <button onClick={() => props.BgChanger('#afeeee')}>Pale Blue</button>
        <button onClick={() => props.BgChanger('#f0f8ff')}>Alice Blue</button>
        <button onClick={() => props.BgChanger('#f5fffa')}>Mint Cream</button>
        <button onClick={() => props.BgChanger('#f0fff0')}>Honeydew</button>
        <button onClick={() => props.BgChanger('#fff5ee')}>Seashell</button>
        <button onClick={() => props.BgChanger('#faf0e6')}>Linen</button>
        <button onClick={() => props.BgChanger('#f7e7ce')}>Champagne Pink</button>
        <button onClick={() => props.BgChanger('#ffe5b4')}>Light Peach</button>
        <button onClick={() => props.BgChanger('#b0e0e6')}>Powder Blue</button>
        <button onClick={() => props.BgChanger('#f5f5dc')}>Light Beige</button>
        <button onClick={() => props.BgChanger('#a89f91')}>Warm Gray</button>
      </div>
    </>
  );
}
export default Nav;
