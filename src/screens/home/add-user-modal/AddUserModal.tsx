import type { AddContactModalProps } from "./types";
import type { ContactParams } from "@/apis/contacts/types";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";

import Modal from "@/components/Modal";
import Form from "@/components/Form";
import { useAddContact } from "react-query/mutations";

import { defaultFormValues, schema } from "./utils";

const AddUserModal = (props: AddContactModalProps): React.ReactElement => {
  const { open, onClose } = props;
  const contactForm = useForm({
    shouldUnregister: true,
    defaultValues: defaultFormValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const addContact = useAddContact();

  const handleSubmit = (values: ContactParams): void => {
    addContact.mutate(values, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <Modal
      title="New Contact"
      maxWidth="md"
      actions={
        <Modal.Actions>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={contactForm.handleSubmit(handleSubmit)}
            disabled={addContact.isLoading}
          >
            Save
          </Button>
        </Modal.Actions>
      }
      open={open}
      onClose={onClose}
    >
      <Stack spacing={3}>
        <Form<ContactParams> {...contactForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Form.TextField name="userName" label="Username" />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField
                name="password"
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField name="lastName" label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField name="middleName" label="Middle Name" />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <Form.TextField name="mobileNo" label="Mobile No." />
            </Grid>
          </Grid>
        </Form>
      </Stack>
    </Modal>
  );
};

export default AddUserModal;
