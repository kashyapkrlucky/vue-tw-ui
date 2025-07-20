import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const showModal = ref(false);
      const open = () => (showModal.value = true);
      const close = () => (showModal.value = false);
      return { showModal, open, close };
    },
    template: `
      <div>
        <button @click="open" class="px-4 py-2 bg-blue-600 text-white rounded">Open Modal</button>
        <Modal v-model="showModal">
          <h2 class="text-lg font-bold">Modal Title</h2>
          <p>This is the modal content.</p>
          <button @click="close" class="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Close</button>
        </Modal>
      </div>
    `,
  }),
};
