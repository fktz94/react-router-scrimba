import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
  const { van } = useOutletContext();

  return van ? (
    <p className="text-2xl mb-6">
      <strong>${van.price}</strong>/day
    </p>
  ) : null;
}

export default HostVanPricing;
