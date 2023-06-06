import React from "react";
import PropTypes from "prop-types";
import { Button, HStack, Input, Pressable } from "native-base";
import { MdDelete } from "react-icons/md";

import Card from "../../../../components/card";

const Members = (props) => {
  const { members, onAddMember, onUpdateMember, onRemoveMember, onNext, nextDisabled, ...rest } = props;

  return (
    <Card {...rest}>
      {members.map((member) => (
        <HStack key={member.id} marginBottom={2}>
          <Input
            flex={1}
            size="md"
            value={member.name}
            onChangeText={(name) => onUpdateMember(member.id, name)}
            placeholder="Member name"
          />
          <Pressable
            alignSelf="stretch"
            justifyContent="center"
            alignItems="center"
            paddingX={1}
            onPress={() => onRemoveMember(member.id)}
          >
            <MdDelete size={25} color="black" />
          </Pressable>
        </HStack>
      ))}
      <HStack alignItems="center" space={3}>
        <Button flex={1} onPress={onAddMember} colorScheme="blue">
          Add member
        </Button>
        <Button flex={1} onPress={onNext} colorScheme="green" isDisabled={nextDisabled}>
          Next
        </Button>
      </HStack>
    </Card>
  );
};

Members.propTypes = {
  members: PropTypes.array.isRequired,
  onAddMember: PropTypes.func.isRequired,
  onUpdateMember: PropTypes.func.isRequired,
  onRemoveMember: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
};

export default React.memo(Members);
