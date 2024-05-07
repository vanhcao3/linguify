import styles from '../../../styles/Dashboard/home.module.css';
import Menu from '@/components/Dashboard/Menu';

const pseudoData = [
    {
        title: 'Khoá học miễn phí',
        data: [
            {
                title: 'VSTEP',
                image: '/images/vstep.png',
                enrollers: 13458,
            },
            {
                title: 'TOEIC',
                image: '/images/toeic.jpg',
                enrollers: 15625,
            },
            {
                title: 'IELTS',
                image: '/images/ielts.png',
                enrollers: 10656,
            },
            {
                title: 'TOEFL',
                image: '/images/toefl.png',
                enrollers: 9831,
            },
            {
                title: 'ESOL',
                image: '/images/esol.png',
                enrollers: 23651,
            },
            {
                title: 'SAT',
                image: '/images/sat.png',
                enrollers: 3251,
            },
            {
                title: 'CEFR',
                image: '/images/cefr.jpg',
                enrollers: 321251,
            },
        ],
    },
    {
        title: 'Ôn tập về các thì',
        data: [
            {
                title: 'Thì Hiện Tại Đơn - Present Simple Tense',
                image: '',
                enrollers: 23203,
            },
            {
                title: 'Thì Hiện Tại Tiếp Diễn - Present Continuous Tense',
                image: '',
                enrollers: 64574,
            },
            {
                title: 'Thì Hiện Tại Hoàn Thành - Present Perfect Simple Tense',
                image: '',
                enrollers: 85213,
            },
            {
                title: 'Thì Hiện Tại Hoàn Thành Tiếp Diễn - Present Perfect Continuous Tense',
                image: '',
                enrollers: 94762,
            },
            {
                title: 'Thì Quá Khứ Đơn - Past Simple Tense',
                image: '',
                enrollers: 14537,
            },
            {
                title: 'Thì Quá Khứ Tiếp Diễn - Past Continuous Tense',
                image: '',
                enrollers: 75675,
            },
            {
                title: 'Thì Quá Khứ Hoàn Thành - Past Perfect Simple Tense',
                image: '',
                enrollers: 78675,
            },
            {
                title: 'Thì Quá Khứ Hoàn Thành Tiếp Diễn - Past Perfect Continuous Tense',
                image: '',
                enrollers: 34834,
            },
            {
                title: 'Thì Tương Lai Đơn - Future Simple Tense',
                image: '',
                enrollers: 42846,
            },
            {
                title: 'Thì Tương Lai Tiếp Diễn - Future Continuous Tense',
                image: '',
                enrollers: 40456,
            },
            {
                title: 'Thì Tương Lai Hoàn Thành - Future Perfect Simple Tense',
                image: '',
                enrollers: 72620,
            },
            {
                title: 'Thì Tương Lai Hoàn Thành Tiếp Diễn - Future Perfect Continuous Tense',
                image: '',
                enrollers: 94301,
            },
        ],
    },
];

export default function Home() {
    return (
        <div className={styles['wrapper']}>
            <div>this is (maybe) a slider</div>
            <div className={styles['content']}>
                {pseudoData.map((category, index) => (
                    <Menu key={index} category={category} />
                ))}
            </div>
        </div>
    );
}
