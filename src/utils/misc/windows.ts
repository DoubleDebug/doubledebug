export function getStartingPositionX(
  osRef: HTMLDivElement | null,
  projectData: Project
) {
  if (!osRef) {
    return 0;
  }
  return Math.round(
    Math.random() *
      (osRef.clientWidth - (projectData.osSettings?.windowSize.w || 0))
  );
}

export function getStartingPositionY() {
  return -550;
}
