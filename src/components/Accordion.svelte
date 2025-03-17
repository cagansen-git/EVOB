<script lang="ts">
    import { ChevronDown } from '@lucide/svelte';
    
    // Define props for the accordion
    let { items = [] } = $props();
    
    // State to track which panel is currently open
    let activeIndex = $state(-1); // -1 means no panel is open initially
    
    // Function to toggle panel visibility
    /**
	 * @param {number} index
	 */
    function togglePanel(index: number) {
      activeIndex = activeIndex === index ? -1 : index;
    }
  </script>
  
    {#each items as item, index}
      <div class="accordion-item">
        <button 
          class="accordion-header" 
          class:active={activeIndex === index}
          onclick={() => togglePanel(index)}
          aria-expanded={activeIndex === index}
          aria-controls={`panel-${index}`}
        >
          <div class="header-content">
            <div class="number-badge">{index + 1}</div>
            <span class="title">{item.title}</span>
          </div>
          <div class={`icon-wrapper ${activeIndex === index ? 'rotated' : ''}`}>
            <ChevronDown size={20} />
          </div>
        </button>
        
        <div 
          id={`panel-${index}`}
          class="accordion-panel" 
          class:open={activeIndex === index}
          aria-hidden={activeIndex !== index}
        >
          <div class="panel-content">
            {item.content}
          </div>
        </div>
      </div>
    {/each}
  
  <style>

    
    .accordion-item {
      border-bottom: 1px solid #e2e8f0;
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 1rem 0rem;
      background-color: white;
      border: none;
      text-align: left;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .accordion-header:hover {
      background-color: #f7fafc;
    }
    
    .accordion-header.active {
      background-color: #f7fafc;
    }
    
    .header-content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .number-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #000;
      color: white;
      font-weight: 600;
      font-size: 14px;
    }
    
    .title {
      font-weight: 500;
      font-size: 1rem;
    }
    
    .icon-wrapper {
      transition: transform 0.3s ease;
    }
    
    .icon-wrapper.rotated {
      transform: rotate(180deg);
    }
    
    .accordion-panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .accordion-panel.open {
      max-height: 500px; /* Adjust based on your content needs */
    }
    
    .panel-content {
      padding: 1rem 0rem;
      padding-left: 3.5rem; /* Aligns content with the title */
    }
    
    /* Responsive adjustments */
    @media (max-width: 640px) {
      .accordion-header {
        padding: 0.75rem;
      }
      
      .header-content {
        gap: 0.5rem;
      }
      
      .panel-content {
        padding: 0.75rem;
        padding-left: 2.5rem;
      }
    }
  </style>