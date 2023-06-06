import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOADING_COLOR } from './theme';

const TextButton = styled.p<any>`
    margin: 0;
    color: ${(props) => (props.color ? props.color : LOADING_COLOR)};
    line-height: 1.5;
    font-size: 14px;
    text-align: right;
    margin-top: 14px;
    cursor: pointer;
`;

export const tourConfig = [
    {
        selector: '[data-tut="reactour__logo"]',
        content: `Xin chào, đây là nơi giao lưu buôn bán code của anh em Frontend WindsSoft`,
    },
    {
        selector: '[data-tut="reactour__user_info"]',
        content: `Đây là thông tin user nhóe 👌👌👌`,
    },
    {
        selector: '[data-tut="reactour__frontend"]',
        content: `Chỗ này dành cho ae Frontend nha 😘`,
    },
    {
        selector: '[data-tut="reactour__backend"]',
        content: `Tương lai cũng sẽ có chỗ chơi cho ae Backend nè 😎😎😎`,
    },
    {
        selector: '[data-tut="reactour__mobile"]',
        content: `Cũng không thể thiếu chỗ vui chơi của ae mobile được hehehe 😁😁😁`,
    },

    // body tour front end
    {
        selector: '[data-tut="reactour__body__frontend"]',
        content: ({ goTo }: any) => {
            return (
                <>
                    <div>Chà chà ... Đây là nơi team FrontEnd giúp nhau giải quyết những issues nha</div>
                    <Link to="/widget">
                        <TextButton onClick={() => goTo(6)}>Đi tiếp nào</TextButton>
                    </Link>
                </>
            );
        },
    },

    // body toure widget
    {
        selector: '[data-tut="reactour__user_widget"]',
        content: ({ goTo }: any) => {
            return (
                <>
                    <div>
                        hiu hiu ... Tại đây các bạn chọn những card phù hợp với dự án nhóe. Tương lai chúng ta sẽ cùng
                        nhau phát triển thêm{' '}
                    </div>
                    <Link to="/storybook">
                        <TextButton onClick={() => goTo(7)}>Đi tiếp nào</TextButton>
                    </Link>
                </>
            );
        },
    },

    // body toure storybook
    {
        selector: '[data-tut="reactour__user_storybook"]',
        content: ({ goTo }: any) => {
            return (
                <>
                    <div>
                        Ú òa ... Nơi đây chính là nơi ae sẽ bê những components hoàn hảo nhất về để tối ưu việc code
                        cũng như hiểu bản chất cũng chúng. 🤗🤗🤗
                    </div>
                    <Link to="/widget">
                        <TextButton>Đi tiếp nào</TextButton>
                    </Link>
                </>
            );
        },
    },
];
