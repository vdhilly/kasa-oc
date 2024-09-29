function Host({ hostName, hostPic }) {
  return (
    <aside className="host">
      <div className="host__name">{hostName}</div>
      <div className="host__picture">
        <img src={hostPic} alt={hostName} />
      </div>
    </aside>
  );
}

export default Host;
