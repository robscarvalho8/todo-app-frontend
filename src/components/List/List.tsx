import { ITodo } from '../../interfaces/ITodo';
import { Column } from '../Column';
import { ListItem } from './ListItem';

type ListProps = {
    items: ITodo[];
    selectedIndex: number;
    onClick: (index: number) => void;
};

export const List: React.FC<ListProps> = ({ items, selectedIndex, onClick }) => {
    return (
        <Column py="10px">
            {items.map((item, index) => (
                <ListItem key={index} {...item} index={index} isActive={index === selectedIndex} onClick={onClick} />
            ))}
        </Column>
    );
};
