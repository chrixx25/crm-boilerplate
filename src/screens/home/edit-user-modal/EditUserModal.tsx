import { useEffect } from "react";

import type { UpdateContactModalProps } from "./types";
import type { ContactParams } from "@/apis/contacts/types";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";

import { useUpdateContact } from "@/react-query/mutations";
import Modal from "@/components/Modal";
import Form from "@/components/Form";
import { useGetContactById } from "@/react-query/queries";

import { defaultFormValues, schema } from "./utils";

const EditUserModal = (props: UpdateContactModalProps): React.ReactElement => {
  const { id, meta, open, onClose } = props;
  const updateContact = useUpdateContact(id, meta);
  const contact = useGetContactById(id);
  const contactForm = useForm({
    shouldUnregister: true,
    defaultValues: defaultFormValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleSubmit = (values: ContactParams): void => {
    updateContact.mutate(values, {
      onSuccess: () => onClose(),
    });
  };

  // effect runs when user state is updated
  useEffect(() => {
    // reset form with user data
    contactForm.reset(contact.data);
  }, [contact.data, contactForm]);

  return (
    <Modal
      title="Edit Contact"
      maxWidth="md"
      actions={
        <Modal.Actions>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={contactForm.handleSubmit(handleSubmit)}
            disabled={updateContact.isLoading}
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

export default EditUserModal;
