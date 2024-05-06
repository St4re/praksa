<template>
   <div>
        <slot></slot>
   </div>
    </template>
  <!--<div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      Open dialog
    </button>
  </div>
    <Dialog :open="isOpen" as="div" @close="closeModal">
      

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
        </div>
      </div>
    </Dialog>
</template>-->

<script>
/*import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
*/

import { Dialog as hdlssDialog } from '@headlessui/vue'
import { ref } from "vue"

export default {
    components: {
        hdlssDialog,
    },
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        initialFocus: {
            type: String,
        },
        as: {
            type: String,
            default: "div",
        },
        static: {
            type: Boolean,
            default: false,
        },
        unmount: {
            type: Boolean,
            default: true,
        }
    },
    setup(props) {  

        return { }
    }
}
</script>

<style lang="scss" scoped>
/*.dialog {
    background-color: red;
    width: 100px;
    height: 100px;
}*/
</style>