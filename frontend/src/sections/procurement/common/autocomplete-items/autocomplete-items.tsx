import { useFormContext, useWatch } from 'react-hook-form';

import { AutocompleteItemsProps } from './types';
import { StockItem } from '../../../../types/inventory/item';

import AsyncAutocomplete from '../../../../components/async-autocomplete';

function AutocompleteItems({ addOrUpdate, itemIds, adornement }: AutocompleteItemsProps) {
  
  const { control } = useFormContext();

  const laboratory_id = useWatch({
    name: 'laboratory',
    control: control,
  });

  return (
    <AsyncAutocomplete
      options={{
        method: 'POST',
        url: 'api/inventory/item/stock-items/',
        body: { laboratory_id: laboratory_id, itemIds: itemIds },
        delay: 300,
        minLength: 3,
      }}
      onChange={addOrUpdate}
      getOptionLabel={(option: StockItem) => `${option?.code} - ${option?.name}`}
      clearOptions
      clearOnSelect
      adornement={adornement}
    />
  );
}

export default AutocompleteItems;
