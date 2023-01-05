import styled from 'styled-components';
import {
    borderLeft,
    BorderLeftProps,
    borderRadius,
    BorderRadiusProps,
    color,
    ColorProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
} from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderLeftProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;

    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${borderLeft}
`;
