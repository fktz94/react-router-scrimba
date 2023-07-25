import { useOutletContext } from 'react-router-dom';

function HostVanInfo() {
  const { van } = useOutletContext();

  return van ? (
    <>
      <p>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p>
        <strong>Category: </strong>
        {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
      </p>
      <p>
        <strong>Description: </strong>
        {van.description}
      </p>
      <p>
        <strong>Visibility: </strong>
        Public
      </p>
    </>
  ) : null;
}

export default HostVanInfo;
