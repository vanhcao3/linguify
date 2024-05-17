import styles from '@/styles/Search/search.module.css';

interface props {
  value: string;
  onChange: (value: string) => void;
}

function Searchbar({ value, onChange }: props) {
  return (
    <div className={styles['search-bar']}>
      <input
        value={value}
        placeholder="Tìm kiếm..."
        onChange={(e) => onChange(e.target.value)}
        className={styles['input-bar']}
      />
    </div>
  );
}

export default Searchbar;
