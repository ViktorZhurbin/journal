import { Button, Stack, Text } from "@mantine/core";
import { Link } from "wouter";
import type { Entry } from "../../../db/instant";
import styles from "./EntryItem.module.css";

export const EntryItem = ({ entry }: { entry: Entry }) => {
  return (
    <Button
      key={entry.id}
      fullWidth
      justify="start"
      h={100}
      variant="default"
      radius="md"
      size="md"
      component={Link}
      href={`/${entry.id}`}
      classNames={{
        label: styles.buttonLabel,
      }}
    >
      <Stack
        gap="md"
        justify="space-between"
        align="flex-start"
        w="100%"
        pr={8}
      >
        <Text fw={500}>{entry.createdAt}</Text>
        <Text
          size="sm"
          // TODO: review later
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: entry.text }}
        />
      </Stack>
    </Button>
  );
};
