import styled from 'styled-components';
import {
    borderLeft,
    BorderLeftProps,
    borderRadius,
    BorderRadiusProps,
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
} from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderLeftProps & FlexboxProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${flexbox}
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${borderLeft}
`;
