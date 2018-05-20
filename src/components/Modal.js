import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

ReactModal.defaultStyles = {
  content: {
    ...ReactModal.defaultStyles.content,
    top: "50%",
    left: "1rem",
    right: "1rem",
    bottom: "unset",
    transform: "translateY(-50%)",
    padding: 0,
    border: "none",
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
}

class Toggle extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { openModal, children } = this.props;
    return children(openModal);
  }
}

function Body({ isOpen, closeModal, children }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      {children({ isOpen, closeModal })}
    </ReactModal>
  );
}

export default class Modal extends React.Component {
  static Toggle = Toggle;
  static Body = Body;

  state = { modalIsOpen: false };

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === Toggle) {
        return React.cloneElement(child, { openModal: this.openModal });
      }

      if (child.type === Body) {
        return React.cloneElement(child, {
          isOpen: this.state.modalIsOpen,
          closeModal: this.closeModal
        });
      }

      return child;
    });

    return children;
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
}