import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem
      style={{ ...style, marginTop: 20 }}
      key={index}
      component="div"
      disablePadding
    >
      {/* <Paper sx={{ width: '100%' }}> */}
      <ListItemButton sx={{ height: '100%', display: 'flex' }}>
        <Box display="flex">
          <ListItemText primary={`Meeting name`} />
        </Box>
        <Box display="flex">
          <ListItemText primary={`Meeting category`} />
        </Box>
      </ListItemButton>
      {/* </Paper> */}
    </ListItem>
  );
}

export const RaceSelectionBox = () => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Box paddingBottom={10}>
          <FixedSizeList
            height={height}
            width={width}
            itemSize={90}
            itemCount={200}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      )}
    </AutoSizer>
  );
};
