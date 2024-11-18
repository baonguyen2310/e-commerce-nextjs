import Image from 'next/image';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Image
        src="https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-boy-flat-icon-illustration-vector-png-image_12650662.png" // Đường dẫn ảnh cục bộ hoặc URL bên ngoài
        alt="avatar"
        width={100}
        height={100}
      />
    </div>
  );
}

export default Profile
