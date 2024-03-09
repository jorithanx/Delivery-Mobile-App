import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 0,
    paddingBottom: 30,
    overflow: 'visible',
    flexDirection: 'column-reverse',
  },
})``;

// hobby-session-134

// hobby-session-268

// hobby-session-274

// hobby-session-279

// hobby-session-296

// hobby-session-312
