//@mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { MeasureUnitFormDialogProps } from './types';
import { GenericValues } from '../../../../types';

import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { useMutateData } from '../../../../hooks/use-mutate-data';
import { useDialogStore } from '../../../../components/dialog';

import { editMeasureUnit, newMeasureUnit } from '../../../../api/inventory/measure-unit';

import { FORM_VALUES } from '../context';

import { SvgIcon } from '../../../../components/svg-color';
import Label from '../../../../components/label';
import ControlledSwitch from '../../../../components/controlled/controlled-switch';

//-------------------------------------------------------------------

export default function MeasureUnitFormDialog({
  values = FORM_VALUES,
  onSubmit
}: MeasureUnitFormDialogProps) {

  const closeDialog = useDialogStore((state) => state.closeDialog);

  const form = useForm<GenericValues>({
    defaultValues: values
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = form;

  const isEdit = !!values.id;

  const handleClose = () => {
    reset();
    closeDialog()
  };

  const mutation = useMutation({
    mutationFn: isEdit ? editMeasureUnit : newMeasureUnit,
  });

  const mutate = useMutateData();

  const sendForm = (data: GenericValues) => {
    mutate.submit({
      promise: mutation.mutateAsync({ ...data }),
      onSuccess: (response) => {
        handleClose();
        if (isEdit && data?.id !== undefined) {
          mutate.updateData({
            queryKey: ['measure-units'],
            id: data.id,
            fields: ['name', 'is_active'],
            values: [data.name, data.is_active],
          });
        } else {
          mutate.append({ queryKey: ['measure-units'], data: {...response?.data} });
        }
        onSubmit && onSubmit(response?.data)
      },
    });
  };


  const icon = isEdit ? 'ic_edit' : 'ic_add';
  const title = isEdit ? 'Modificar' : 'Registrar';

  return (
    <>
      <DialogTitle display="flex" alignItems="center" gap={1} typography="subtitle2">
        <Label color="primary" sx={{ borderRadius: '30%', py: '20px', px: '10px' }}>
          <SvgIcon icon={icon} width={22} sx={{ opacity: 0.86 }} />
        </Label>
        {title} Unidad de Medida
      </DialogTitle>
      <form autoComplete="off" onSubmit={handleSubmit(sendForm)}>
        <DialogContent>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
            }}
          >
            <TextField
              defaultValue={values.name}
              sx={{ mb: 2 }}
              margin="dense"
              fullWidth
              label="Nombre"
              {...register('name', { required: 'El nombre es requerido' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            {isEdit && <ControlledSwitch name="is_active" label="Estado" control={control} />}
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <LoadingButton type="submit" variant="contained" color='inherit' loading={false}>
            Guardar
          </LoadingButton>
          <Button variant="outlined" onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
