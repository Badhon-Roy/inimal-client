

const DeleteIcon = ({ className = "" , size = 16}) => {

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path d="M9.7356 2.80278L10.2592 3.94505H11.9485C12.4678 3.94505 12.8889 4.3661 12.8889 4.88548V5.58193C12.8889 5.93703 12.601 6.22491 12.2459 6.22491H3.43327C3.07815 6.22491 2.79028 5.93703 2.79028 5.58193V4.88548C2.79028 4.3661 3.21133 3.94505 3.73072 3.94505H5.41995L5.9436 2.80278C6.10074 2.46 6.44324 2.24023 6.82033 2.24023H8.85886C9.23595 2.24023 9.57841 2.46 9.7356 2.80278Z" stroke="currentColor" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.9041 6.27246V11.8313C11.9041 12.8967 11.0512 13.7603 9.9991 13.7603H5.68113C4.62903 13.7603 3.77612 12.8967 3.77612 11.8313V6.27246" stroke="currentColor" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.75854 8.52246V11.4078M8.922 8.52246V11.4078" stroke="currentColor" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
};

export default DeleteIcon;